create extension if not exists pg_trgm;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  email text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.memes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short_description text not null,
  meaning text not null,
  origin_description text not null,
  cultural_context text not null default '',
  origin_date text,
  origin_platform text,
  origin_creator text,
  thumbnail_url text,
  trend_status text not null default 'stable' check (trend_status in ('new','rising','trending','viral','stable','declining','revived','classic')),
  trend_score integer not null default 0 check (trend_score between 0 and 100),
  trend_change_24h integer not null default 0,
  tone_tags text[] not null default '{}',
  intensity jsonb not null default '{}'::jsonb,
  usage_context jsonb not null default '{}'::jsonb,
  timeline jsonb not null default '[]'::jsonb,
  categories text[] not null default '{}',
  related_meme_ids uuid[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.meme_aliases (
  id uuid primary key default gen_random_uuid(),
  meme_id uuid not null references public.memes(id) on delete cascade,
  alias text not null,
  alias_type text not null default 'alias',
  created_at timestamptz not null default now(),
  unique (meme_id, alias)
);

create table if not exists public.meme_sources (
  id uuid primary key default gen_random_uuid(),
  meme_id uuid not null references public.memes(id) on delete cascade,
  source_type text not null check (source_type in ('youtube','community','article','social_media','image','video','other')),
  source_url text not null,
  youtube_video_id text,
  youtube_timestamp text,
  source_title text,
  source_description text,
  is_original boolean not null default false,
  is_verified boolean not null default false,
  verification_status text not null default 'reference_only' check (verification_status in ('verified','reference_only','origin_not_verified','representative')),
  created_at timestamptz not null default now()
);

create table if not exists public.meme_usage_examples (
  id uuid primary key default gen_random_uuid(),
  meme_id uuid not null references public.memes(id) on delete cascade,
  situation text not null,
  example_text text not null,
  explanation text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.meme_feed_items (
  id uuid primary key default gen_random_uuid(),
  meme_id uuid not null references public.memes(id) on delete cascade,
  media_type text not null check (media_type in ('image','video')),
  media_url text not null,
  thumbnail_url text,
  source_url text,
  youtube_video_id text,
  youtube_timestamp text,
  short_caption text,
  trend_score integer not null default 0 check (trend_score between 0 and 100),
  trend_status text not null default 'stable' check (trend_status in ('new','rising','trending','viral','stable','declining','revived','classic')),
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.saved_memes (
  user_id uuid not null references auth.users(id) on delete cascade,
  meme_id uuid not null references public.memes(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, meme_id)
);

create table if not exists public.meme_view_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  meme_id uuid not null references public.memes(id) on delete cascade,
  source text not null check (source in ('search','feed','related','direct')),
  viewed_at timestamptz not null default now()
);

create table if not exists public.search_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  query text not null,
  selected_meme_id uuid references public.memes(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.meme_edit_suggestions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  suggestion_type text not null check (suggestion_type in ('create','update')),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  target_meme_id uuid references public.memes(id) on delete set null,
  payload jsonb not null,
  reviewer_id uuid references auth.users(id) on delete set null,
  review_note text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists memes_title_trgm_idx on public.memes using gin (title gin_trgm_ops);
create index if not exists memes_categories_idx on public.memes using gin (categories);
create index if not exists meme_aliases_alias_trgm_idx on public.meme_aliases using gin (alias gin_trgm_ops);
create index if not exists meme_feed_items_rank_idx on public.meme_feed_items (trend_score desc, published_at desc);
create index if not exists meme_view_history_user_idx on public.meme_view_history (user_id, viewed_at desc);
create index if not exists search_history_user_idx on public.search_history (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.memes enable row level security;
alter table public.meme_aliases enable row level security;
alter table public.meme_sources enable row level security;
alter table public.meme_usage_examples enable row level security;
alter table public.meme_feed_items enable row level security;
alter table public.saved_memes enable row level security;
alter table public.meme_view_history enable row level security;
alter table public.search_history enable row level security;
alter table public.meme_edit_suggestions enable row level security;

create policy "Public can read memes" on public.memes for select using (true);
create policy "Public can read aliases" on public.meme_aliases for select using (true);
create policy "Public can read sources" on public.meme_sources for select using (true);
create policy "Public can read usage examples" on public.meme_usage_examples for select using (true);
create policy "Public can read feed items" on public.meme_feed_items for select using (true);

create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Users can manage own saved memes" on public.saved_memes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own view history" on public.meme_view_history for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own search history" on public.search_history for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can create own meme suggestions" on public.meme_edit_suggestions for insert with check (auth.uid() = user_id);
create policy "Users can read own meme suggestions" on public.meme_edit_suggestions for select using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, email, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)),
    new.email,
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do update set
    display_name = excluded.display_name,
    email = excluded.email,
    avatar_url = excluded.avatar_url,
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert or update on auth.users
  for each row execute procedure public.handle_new_user();
