delete from public.meme_feed_items where meme_id in (
  select id from public.memes where slug in (
    'jang-wonyoung-oo','kinda-chic-to','saxophones-are-getting-louder','remember-november-2026',
    'pogi-hagetseumnida-ani-hagetseumnida','macaron-malmeok','gwiin-map','roblox-geunhwang',
    'i-wash','google-timeline-visualizer'
  )
);

delete from public.meme_usage_examples where meme_id in (
  select id from public.memes where slug in (
    'jang-wonyoung-oo','kinda-chic-to','saxophones-are-getting-louder','remember-november-2026',
    'pogi-hagetseumnida-ani-hagetseumnida','macaron-malmeok','gwiin-map','roblox-geunhwang',
    'i-wash','google-timeline-visualizer'
  )
);

delete from public.meme_sources where meme_id in (
  select id from public.memes where slug in (
    'jang-wonyoung-oo','kinda-chic-to','saxophones-are-getting-louder','remember-november-2026',
    'pogi-hagetseumnida-ani-hagetseumnida','macaron-malmeok','gwiin-map','roblox-geunhwang',
    'i-wash','google-timeline-visualizer'
  )
);

delete from public.meme_aliases where meme_id in (
  select id from public.memes where slug in (
    'jang-wonyoung-oo','kinda-chic-to','saxophones-are-getting-louder','remember-november-2026',
    'pogi-hagetseumnida-ani-hagetseumnida','macaron-malmeok','gwiin-map','roblox-geunhwang',
    'i-wash','google-timeline-visualizer'
  )
);

with seed(slug, title, aliases, trend_period, trend_status, short_description, meaning, origin_description, usage_examples, reference_url) as (
  values
  ('jang-wonyoung-oo','장원영 OO',array['장원영 밈','장원영 OO 밈','밤티 반대말','원영고치'],'2026-09','trending','보기 좋고 완성도가 높은 대상 앞에 ''장원영''을 붙여 최고의 칭찬처럼 사용하는 밈.','촌스럽거나 어설픈 것을 표현하는 ''밤티''와 반대되는 개념으로, 예쁘고 세련되거나 완성도가 높은 것을 칭찬할 때 사용한다.','다마고치 커뮤니티에서 잘 자란 캐릭터를 ''원영고치''라고 부르던 표현에서 확장된 것으로 소개된다. 이후 음식, 패션, 사진 등 다양한 대상 앞에 ''장원영''을 붙이는 표현으로 확산됐다.',array['장원영 불닭','오늘 완전 장원영 하루다','이 인테리어 진짜 장원영이다'],'https://www.instablank.com/meme/209'),
  ('kinda-chic-to','Kinda Chic To',array['Kinda Chic To 밈','하는 게 좀 시크하지','돈 안 드는 자랑'],'2026-09','trending','돈이나 명품이 아닌 소소한 습관과 성취를 ''시크하다''고 표현하는 캡션형 밈.','잘 자는 것, 감정을 잘 조절하는 것, 연락을 제때 하는 것처럼 작지만 긍정적인 행동을 멋있는 일처럼 자랑한다.','2026년 봄부터 Instagram Reels와 TikTok 등에서 ''Kinda chic to...''로 시작하는 문장을 반복하는 포맷이 확산된 것으로 정리된다.',array['Kinda chic to go to bed before midnight.','Kinda chic to not reply when you''re angry.','일찍 자는 게 좀 시크하지.'],'https://www.instablank.com/meme/226'),
  ('saxophones-are-getting-louder','색소폰이 커지고 있다',array['Saxophones Are Getting Louder','색소폰 밈','불길한 색소폰'],'2026-09','trending','평범한 상황에 불길한 색소폰 음악을 넣어 곧 큰일이 날 것처럼 연출하는 영상 밈.','실제로는 별일 아닌 상황을 영화의 비극적인 장면처럼 과장하는 데 사용한다.','1991년 영화 ''Boyz n the Hood''의 긴장감 있는 장면에 사용된 색소폰 사운드가 밈의 기반으로 소개된다. 이후 TikTok에서 평범한 상황에 해당 음악을 덧붙이는 형태로 재유행했다.',array['월요일 아침 메일함을 여는 순간','팀장님이 ''잠깐 얘기 좀 하자''고 할 때','시험 결과 확인 버튼을 누르기 직전'],'https://www.instablank.com/meme/225'),
  ('remember-november-2026','Remember November 2026',array['Remember November 2026 밈','AI 북극곰 밈','11월 북극곰'],'2026-09','viral','AI 북극곰이 ''Remember November 2026''을 반복하는 초현실적인 숏폼 밈.','특별한 의미가 없는 문장을 마치 거대한 예언이나 사건처럼 비장하게 말하는 데서 웃음을 만든다.','몇 년 전 게시된 북극곰 AI 이미지 농담과 연결되며, 2026년 8월 말 AI 뮤직비디오 형태의 콘텐츠가 등장한 뒤 숏폼에서 확산된 것으로 소개된다.',array['11월 일정표와 함께 ''Remember November 2026''','11월 만료되는 계약이나 쿠폰을 보여주며 사용','아무 의미 없는 사건을 예언처럼 과장'],'https://www.instablank.com/meme/224'),
  ('pogi-hagetseumnida-ani-hagetseumnida','포기하겠습니다… 아니 하겠습니다',array['9월 포기하겠습니다','면접 포기 밈','포기하겠습니다 밈'],'2026-09','trending','포기했다가 다시 하겠다고 번복하고 다시 포기하는 갈팡질팡 상태를 표현하는 텍스트 밈.','결심과 포기를 반복하는 사람의 마음을 과장해서 표현할 때 사용한다.','면접을 포기하겠다고 했다가 번복하고 다시 포기하는 내용의 문자 캡처가 커뮤니티에서 확산된 것으로 정리된다.',array['다이어트 포기하겠습니다… 아니 다시 하겠습니다… 죄송합니다 그냥 포기하겠습니다.','공부 열심히 하겠습니다… 아니 잠깐만 쉬겠습니다… 그냥 포기하겠습니다.','퇴사하겠습니다… 아니 다니겠습니다… 죄송합니다 퇴사하겠습니다.'],'https://www.instablank.com/meme/211'),
  ('macaron-malmeok','마카롱 말먹',array['마카롱 말먹 밈','마카롱 우유','마카롱 아아'],'2026-09','trending','마카롱을 우유나 아이스 아메리카노 등에 담가 먹는 먹방·ASMR 유행.','마카롱을 음료에 ''말아 먹는'' 모습 자체를 시각적·청각적 콘텐츠로 즐기는 트렌드.','마카롱의 강한 단맛을 줄이기 위해 음료에 적셔 먹는 방식이 먹방 콘텐츠에서 소개되면서 확산된 것으로 정리된다.',array['마카롱을 우유에 담그는 ASMR','아이스 아메리카노에 마카롱을 넣어 먹기','색깔별 마카롱 말먹 챌린지'],'https://www.instablank.com/meme/216'),
  ('gwiin-map','귀인 지도',array['귀인지도','사주 귀인','내 귀인 찾기'],'2026-09','trending','생년월일을 이용해 자신에게 도움이 되는 사람이나 궁합을 찾고 결과를 공유하는 참여형 콘텐츠.','사주 결과를 친구 관계와 연결해 누가 자신의 귀인인지 확인하고 SNS에서 공유하는 놀이.','생년월일 기반 사주 서비스의 공유 기능이 Instagram Story 등에서 확산되며 참여형 밈처럼 소비됐다.',array['내 귀인 누군지 찾아보기','스토리에 결과 공유하기','친구에게 링크를 보내 서로 궁합 확인'],'https://www.instablank.com/meme/214'),
  ('roblox-geunhwang','로블록스 근황',array['로블록스 근황 밈','로블록스 먹방','로블록스 ASMR'],'2026-09','trending','로블록스 안에서 벌어지는 기묘하거나 지나치게 현실적인 장면을 ''근황''처럼 소개하는 밈.','각진 게임 캐릭터가 식사, 춤, ASMR 등 현실적인 활동을 진지하게 하는 모습에서 웃음을 만든다.','이용자가 직접 다양한 게임을 만드는 Roblox 특성상 기묘한 콘텐츠가 계속 등장했고, 이를 ''로블록스 근황''이라는 제목으로 공유하면서 밈화됐다.',array['로블록스에서 혼밥하는 캐릭터','로블록스 ASMR','로블록스 캐릭터의 현실적인 일상'],'https://www.instablank.com/meme/213'),
  ('i-wash','아이워시',array['아이워시 밈','LG 워시콤보 걸그룹','AI DOL'],'2026-09','trending','세탁기 기능을 걸그룹 멤버처럼 의인화한 LG전자 광고 캠페인이 밈처럼 소비된 사례.','평범한 제품 기능을 아이돌 콘셉트와 중독성 있는 노래로 과장해 소개하는 데서 재미를 만든다.','LG전자의 워시콤보 관련 AI 기능을 5인조 그룹처럼 표현한 광고 캠페인에서 시작됐다.',array['사물의 기능을 아이돌 멤버처럼 소개','캠페인 음악을 배경음으로 활용','제품 기능을 그룹 멤버 캐릭터로 패러디'],'https://www.instablank.com/meme/217'),
  ('google-timeline-visualizer','구글 타임라인 비주얼라이저',array['구글 타임라인 밈','이동경로 지도','타임라인 비주얼라이저'],'2026-09','trending','Google Maps 타임라인 이동 기록을 지도 위에 시각화해 공유하는 인증형 트렌드.','자신이 1년 동안 어디를 다녔는지 지도에 표시하고, 여행이 많거나 집-회사만 반복한 모습을 재미있게 공유한다.','Google Maps의 위치 기록 데이터를 별도의 시각화 방식으로 표현한 결과물을 SNS에 공유하면서 유행했다.',array['1년 이동 경로 인증','집-회사만 반복한 동선을 자조적으로 공유','해외여행 이동 경로 자랑'],'https://www.instablank.com/meme/215')
),
upserted as (
  insert into public.memes
    (slug, title, short_description, meaning, origin_description, cultural_context, origin_date, origin_platform, origin_creator, thumbnail_url, trend_status, trend_score, trend_change_24h, tone_tags, intensity, usage_context, timeline, categories)
  select
    slug,
    title,
    short_description,
    meaning,
    origin_description,
    'Reference source: ' || reference_url || '. YouTube 영상은 아직 정확히 검증되지 않아 비워둡니다.',
    trend_period,
    'Instablank reference / SNS',
    'origin not fully verified',
    null,
    trend_status,
    case when trend_status = 'viral' then 94 else 86 end,
    case when trend_status = 'viral' then 140 else 72 end,
    array['Funny','Ironic','Trend-oriented'],
    '{"Humor":74,"Sarcasm":28,"Aggressiveness":4}'::jsonb,
    '{"Friends":"Good","Social media":"Good","Work chat":"Use carefully","Formal":"Avoid"}'::jsonb,
    jsonb_build_array(
      jsonb_build_object('date', trend_period, 'event', '2026년 9월 트렌드 목록에 포함'),
      jsonb_build_object('date', trend_period, 'event', 'reference_url 기반으로 초기 검증 seed에 반영')
    ),
    array['Trending Now','New','Korean Communities']
  from seed
  on conflict (slug) do update set
    title = excluded.title,
    short_description = excluded.short_description,
    meaning = excluded.meaning,
    origin_description = excluded.origin_description,
    cultural_context = excluded.cultural_context,
    origin_date = excluded.origin_date,
    origin_platform = excluded.origin_platform,
    origin_creator = excluded.origin_creator,
    thumbnail_url = excluded.thumbnail_url,
    trend_status = excluded.trend_status,
    trend_score = excluded.trend_score,
    trend_change_24h = excluded.trend_change_24h,
    tone_tags = excluded.tone_tags,
    intensity = excluded.intensity,
    usage_context = excluded.usage_context,
    timeline = excluded.timeline,
    categories = excluded.categories,
    updated_at = now()
  returning id, slug
)
insert into public.meme_aliases (meme_id, alias)
select u.id, alias
from upserted u
join seed s on s.slug = u.slug
cross join lateral unnest(s.aliases) alias
on conflict (meme_id, alias) do nothing;

with seed(slug, usage_examples) as (
  values
  ('jang-wonyoung-oo',array['장원영 불닭','오늘 완전 장원영 하루다','이 인테리어 진짜 장원영이다']),
  ('kinda-chic-to',array['Kinda chic to go to bed before midnight.','Kinda chic to not reply when you''re angry.','일찍 자는 게 좀 시크하지.']),
  ('saxophones-are-getting-louder',array['월요일 아침 메일함을 여는 순간','팀장님이 ''잠깐 얘기 좀 하자''고 할 때','시험 결과 확인 버튼을 누르기 직전']),
  ('remember-november-2026',array['11월 일정표와 함께 ''Remember November 2026''','11월 만료되는 계약이나 쿠폰을 보여주며 사용','아무 의미 없는 사건을 예언처럼 과장']),
  ('pogi-hagetseumnida-ani-hagetseumnida',array['다이어트 포기하겠습니다… 아니 다시 하겠습니다… 죄송합니다 그냥 포기하겠습니다.','공부 열심히 하겠습니다… 아니 잠깐만 쉬겠습니다… 그냥 포기하겠습니다.','퇴사하겠습니다… 아니 다니겠습니다… 죄송합니다 퇴사하겠습니다.']),
  ('macaron-malmeok',array['마카롱을 우유에 담그는 ASMR','아이스 아메리카노에 마카롱을 넣어 먹기','색깔별 마카롱 말먹 챌린지']),
  ('gwiin-map',array['내 귀인 누군지 찾아보기','스토리에 결과 공유하기','친구에게 링크를 보내 서로 궁합 확인']),
  ('roblox-geunhwang',array['로블록스에서 혼밥하는 캐릭터','로블록스 ASMR','로블록스 캐릭터의 현실적인 일상']),
  ('i-wash',array['사물의 기능을 아이돌 멤버처럼 소개','캠페인 음악을 배경음으로 활용','제품 기능을 그룹 멤버 캐릭터로 패러디']),
  ('google-timeline-visualizer',array['1년 이동 경로 인증','집-회사만 반복한 동선을 자조적으로 공유','해외여행 이동 경로 자랑'])
)
insert into public.meme_usage_examples (meme_id, situation, example_text, explanation, sort_order)
select m.id, '일상 대화나 SNS 캡션에서 사용할 때', example_text, m.meaning, sort_order
from seed s
join public.memes m on m.slug = s.slug
cross join lateral unnest(s.usage_examples) with ordinality as u(example_text, sort_order);

with seed(slug, reference_url) as (
  values
  ('jang-wonyoung-oo','https://www.instablank.com/meme/209'),
  ('kinda-chic-to','https://www.instablank.com/meme/226'),
  ('saxophones-are-getting-louder','https://www.instablank.com/meme/225'),
  ('remember-november-2026','https://www.instablank.com/meme/224'),
  ('pogi-hagetseumnida-ani-hagetseumnida','https://www.instablank.com/meme/211'),
  ('macaron-malmeok','https://www.instablank.com/meme/216'),
  ('gwiin-map','https://www.instablank.com/meme/214'),
  ('roblox-geunhwang','https://www.instablank.com/meme/213'),
  ('i-wash','https://www.instablank.com/meme/217'),
  ('google-timeline-visualizer','https://www.instablank.com/meme/215')
)
insert into public.meme_sources
  (meme_id, source_type, source_url, youtube_video_id, youtube_timestamp, source_title, source_description, is_original, is_verified, verification_status)
select
  m.id,
  'article',
  s.reference_url,
  null,
  null,
  'Verification reference',
  '초기 검증용 reference_url입니다. 정확히 매칭되는 YouTube 원본은 아직 연결하지 않았습니다.',
  false,
  true,
  'reference_only'
from seed s
join public.memes m on m.slug = s.slug
where not exists (
  select 1 from public.meme_sources existing
  where existing.meme_id = m.id and existing.source_url = s.reference_url
);
