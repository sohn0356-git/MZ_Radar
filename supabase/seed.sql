insert into public.memes
  (slug, title, short_description, meaning, origin_description, cultural_context, origin_date, origin_platform, origin_creator, thumbnail_url, trend_status, trend_score, trend_change_24h, tone_tags, intensity, usage_context, timeline, categories)
values
  ('wonyoung-thinking', '원영적 사고', '불리한 상황도 운 좋게 해석하는 초긍정 밈.', '안 좋은 상황에서도 긍정적인 의미를 찾아내는 말투입니다.', '아이브 장원영의 긍정적인 말투와 팬 콘텐츠가 바탕이 되었고, 럭키비키 표현이 쇼츠와 릴스에서 확산됐습니다.', '팬 콘텐츠 기반 표현입니다. 원본 단일 영상보다 대표 사용 흐름으로 보는 편이 안전합니다.', '2024~2026', 'K-pop fandom / Shorts', 'first known popular usage: fan content', 'https://img.youtube.com/vi/CuklIb9d3fI/hqdefault.jpg', 'revived', 93, 182, array['Cute','Encouraging','Ironic'], '{"Positivity":92,"Cuteness":82,"Sarcasm":18}', '{"Friends":"Good","Social media":"Good","Work chat":"Use carefully","Formal":"Avoid"}', '[{"date":"2024","event":"럭키비키 표현 확산"},{"date":"2026","event":"긍정 전환 밈으로 재회자"}]', array['Trending Now','Celebrities','YouTube','New']),
  ('kinda-chic-to', 'Kinda chic to', '평범한 행동을 고급스럽고 쿨한 라이프스타일처럼 포장하는 밈.', 'Kinda chic to 뒤에 평범한 행동을 붙여 자조적 자기승인을 만드는 포맷입니다.', '2026년 해외 SNS에서 평범함을 세련됨으로 말하기 포맷으로 확산됐고 한국어권에서도 응용 사례가 늘었습니다.', '해외 SNS 포맷의 한국어권 응용입니다. 원본 단일 게시물은 미확인입니다.', '2026.09', 'TikTok / X / Instagram', 'origin not fully verified', 'https://img.youtube.com/vi/09R8_2nJtjg/hqdefault.jpg', 'new', 88, 96, array['Ironic','Funny'], '{"Humor":75,"Sarcasm":42,"Aggressiveness":2}', '{"Friends":"Good","Social media":"Good","Work chat":"Use carefully","Formal":"Avoid"}', '[{"date":"2026.09","event":"해외 SNS 포맷으로 확산"},{"date":"2026.09","event":"한국어권 번역/응용 증가"}]', array['Trending Now','New','Social media']),
  ('trend-next', '그럼 다음은 무조건 OO겠지', '빠르게 바뀌는 유행 다음 차례에 자신이 좋아하는 것을 넣는 소원형 밈.', '초단기 유행 릴레이를 보며 다음 유행은 내가 좋아하는 것이길 바라는 팬덤식 농담입니다.', '2026년 초 두바이 쫀득쿠키, 봄동비빔밥 등 빠른 먹거리 유행 교체를 두고 X에서 퍼진 포맷으로 알려졌습니다.', 'X 기반 텍스트 포맷으로 대표 사용 맥락 기준입니다.', '2026 상반기', 'X / Korean communities', 'first known popular usage: Korean X users', '', 'rising', 86, 51, array['Funny','Ironic'], '{"Humor":78,"Sarcasm":36}', '{"Friends":"Good","Social media":"Good","Work chat":"Use carefully","Formal":"Avoid"}', '[{"date":"2026 상반기","event":"먹거리 유행 릴레이 자조에서 확산"}]', array['Trending Now','Korean Communities']),
  ('jung-gguk-ma', '중꺾마', '계속 실패해도 포기하지 않는 태도를 응원할 때 쓰는 말.', '중요한 건 꺾이지 않는 마음의 줄임말입니다.', '2022년 DRX의 리그 오브 레전드 월드 챔피언십 여정과 함께 대중적으로 퍼졌습니다.', 'e스포츠에서 출발해 공부, 직장, 스포츠 응원 표현으로 확장됐습니다.', '2022', 'eSports', 'DRX related interviews and fandom', '', 'classic', 74, 12, array['Encouraging','Funny'], '{"Encouragement":88,"Sarcasm":22}', '{"Friends":"Good","Social media":"Good","Work chat":"Use carefully","Formal":"Avoid"}', '[{"date":"2022","event":"DRX 월즈 서사와 함께 확산"}]', array['Classic','Gaming','Sports','Workplace'])
on conflict (slug) do update set
  title = excluded.title,
  short_description = excluded.short_description,
  meaning = excluded.meaning,
  origin_description = excluded.origin_description,
  cultural_context = excluded.cultural_context,
  trend_status = excluded.trend_status,
  trend_score = excluded.trend_score,
  updated_at = now();

insert into public.meme_aliases (meme_id, alias)
select m.id, alias
from public.memes m
cross join lateral unnest(case m.slug
  when 'wonyoung-thinking' then array['장원영','장원영식 긍정','럭키비키','완전 럭키비키잖아']
  when 'kinda-chic-to' then array['킨다 시크','kinda chic','평범한데 시크','normal is chic']
  when 'trend-next' then array['대한민국 유행 훅훅','다음은 무조건','두쫀쿠 다음']
  when 'jung-gguk-ma' then array['중요한 건 꺾이지 않는 마음','꺾이지 않는 마음','중요한건 꺾이지 않는 마음']
  else array[]::text[]
end) alias
on conflict (meme_id, alias) do nothing;

insert into public.meme_usage_examples (meme_id, situation, example_text, explanation, sort_order)
select id, '친구가 실패 후 다시 시도할 때', '중요한 건 꺾이지 않는 마음이지.', '실패에도 계속하는 사람을 가볍게 응원할 때 씁니다.', 1
from public.memes where slug = 'jung-gguk-ma'
on conflict do nothing;

insert into public.meme_usage_examples (meme_id, situation, example_text, explanation, sort_order)
select id, '기다림이 길어진 상황', '이야기할 시간 생겼네. 완전 럭키비키잖아.', '불편한 상황을 긍정적으로 뒤집는 원영적 사고식 사용입니다.', 1
from public.memes where slug = 'wonyoung-thinking'
on conflict do nothing;

insert into public.meme_feed_items
  (meme_id, media_type, media_url, thumbnail_url, source_url, youtube_video_id, youtube_timestamp, short_caption, trend_score, trend_status, published_at)
select id, 'image', coalesce(nullif(thumbnail_url, ''), '/icons/icon.svg'), coalesce(nullif(thumbnail_url, ''), '/icons/icon.svg'), null, null, null, short_description, trend_score, trend_status, now()
from public.memes
on conflict do nothing;
