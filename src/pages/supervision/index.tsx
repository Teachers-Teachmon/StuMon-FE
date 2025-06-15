import { useState } from 'react';
import * as S from './style';
import MonthSelector from '../../containers/supervision/monthSelector';
import SupervisionItem from '../../containers/supervision/supervisionItem';

interface SupervisionResponse {
  data: {
    week: string;
    day: string;
    date: string;
    self_study_teacher: {
      '7th_teacher': string | null;
      '8th_teacher': string | null;
      '10th_teacher': string | null;
    };
    leave_seat_teacher: {
      '7th_teacher': string | null;
      '8th_teacher': string | null;
      '10th_teacher': string | null;
    };
    night_teacher: string | null;
  }[];
}

const DAYS = ['월', '화', '수', '목'] as const;

const groupByWeek = (data: SupervisionResponse['data']) => {
  const weekMap = new Map<string, SupervisionResponse['data']>();
  data.forEach(item => {
    if (!weekMap.has(item.week)) weekMap.set(item.week, []);
    weekMap.get(item.week)!.push(item);
  });

  return Array.from(weekMap.entries()).map(([week, items]) => {
    const filledItems = DAYS.map(dayAbbr => {
      const found = items.find(i => i.day.includes(`(${dayAbbr})`));
      if (found) return found;

      return {
        week,
        date: '',
        day: dayAbbr,
        self_study_teacher: {
          '7th_teacher': null,
          '8th_teacher': null,
          '10th_teacher': null,
        },
        leave_seat_teacher: {
          '7th_teacher': null,
          '8th_teacher': null,
          '10th_teacher': null,
        },
        night_teacher: null,
      };
    });

    return { week, items: filledItems };
  });
};

export default function Supervision() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const supervisionMockData: SupervisionResponse = {
    "data": [
      {
        "week": "6월 2주차",
        "day": "6월 2일 (월)",
        "date": "2025-06-02",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "조성찬/80",
          "10th_teacher": "조성찬/80"
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": "안정은/68",
          "10th_teacher": "안정은/68"
        },
        "night_teacher": null
      },
      {
        "week": "6월 2주차",
        "day": "6월 3일 (화)",
        "date": "2025-06-03",
        "self_study_teacher": {
          "7th_teacher": "장현정/75",
          "8th_teacher": "장현정/75",
          "10th_teacher": "장현정/75"
        },
        "leave_seat_teacher": {
          "7th_teacher": "진예빈/81",
          "8th_teacher": "진예빈/81",
          "10th_teacher": "진예빈/81"
        },
        "night_teacher": null
      },
      {
        "week": "6월 2주차",
        "day": "6월 4일 (수)",
        "date": "2025-06-04",
        "self_study_teacher": {
          "7th_teacher": "정종건/78",
          "8th_teacher": "정종건/78",
          "10th_teacher": "정종건/78"
        },
        "leave_seat_teacher": {
          "7th_teacher": "박수진/62",
          "8th_teacher": "박수진/62",
          "10th_teacher": "박수진/62"
        },
        "night_teacher": null
      },
      {
        "week": "6월 2주차",
        "day": "6월 5일 (목)",
        "date": "2025-06-05",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": null,
          "10th_teacher": null
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": null,
          "10th_teacher": null
        },
        "night_teacher": null
      },
      {
        "week": "6월 3주차",
        "day": "6월 9일 (월)",
        "date": "2025-06-09",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "강경아/85",
          "10th_teacher": "강경아/85"
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": "박건우/59",
          "10th_teacher": "박건우/59"
        },
        "night_teacher": null
      },
      {
        "week": "6월 3주차",
        "day": "6월 10일 (화)",
        "date": "2025-06-10",
        "self_study_teacher": {
          "7th_teacher": "이혜정/73",
          "8th_teacher": "이혜정/73",
          "10th_teacher": "이혜정/73"
        },
        "leave_seat_teacher": {
          "7th_teacher": "손현정/67",
          "8th_teacher": "손현정/67",
          "10th_teacher": "손현정/67"
        },
        "night_teacher": null
      },
      {
        "week": "6월 3주차",
        "day": "6월 11일 (수)",
        "date": "2025-06-11",
        "self_study_teacher": {
          "7th_teacher": "김규봉/55",
          "8th_teacher": "김규봉/55",
          "10th_teacher": "김규봉/55"
        },
        "leave_seat_teacher": {
          "7th_teacher": "이세준/72",
          "8th_teacher": "이세준/72",
          "10th_teacher": "이세준/72"
        },
        "night_teacher": null
      },
      {
        "week": "6월 3주차",
        "day": "6월 12일 (목)",
        "date": "2025-06-12",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": null,
          "10th_teacher": null
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": null,
          "10th_teacher": null
        },
        "night_teacher": null
      },
      {
        "week": "6월 4주차",
        "day": "6월 16일 (월)",
        "date": "2025-06-16",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "전지영/76",
          "10th_teacher": "전지영/76"
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": "설동상/66",
          "10th_teacher": "설동상/66"
        },
        "night_teacher": null
      },
      {
        "week": "6월 4주차",
        "day": "6월 17일 (화)",
        "date": "2025-06-17",
        "self_study_teacher": {
          "7th_teacher": "김미영/56",
          "8th_teacher": "김미영/56",
          "10th_teacher": "김미영/56"
        },
        "leave_seat_teacher": {
          "7th_teacher": "곽상미/54",
          "8th_teacher": "곽상미/54",
          "10th_teacher": "곽상미/54"
        },
        "night_teacher": null
      },
      {
        "week": "6월 4주차",
        "day": "6월 18일 (수)",
        "date": "2025-06-18",
        "self_study_teacher": {
          "7th_teacher": "박근남/60",
          "8th_teacher": "박근남/60",
          "10th_teacher": "박근남/60"
        },
        "leave_seat_teacher": {
          "7th_teacher": "박진향/65",
          "8th_teacher": "박진향/65",
          "10th_teacher": "박진향/65"
        },
        "night_teacher": null
      },
      {
        "week": "6월 4주차",
        "day": "6월 19일 (목)",
        "date": "2025-06-19",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "유근찬/69",
          "10th_teacher": "유근찬/69"
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": "이경숙/70",
          "10th_teacher": "이경숙/70"
        },
        "night_teacher": null
      },
      {
        "week": "6월 5주차",
        "day": "6월 23일 (월)",
        "date": "2025-06-23",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "허혜진/84",
          "10th_teacher": "허혜진/84"
        },
        "leave_seat_teacher": {
          "7th_teacher": null,
          "8th_teacher": "장나영/74",
          "10th_teacher": "장나영/74"
        },
        "night_teacher": null
      },
      {
        "week": "6월 5주차",
        "day": "6월 24일 (화)",
        "date": "2025-06-24",
        "self_study_teacher": {
          "7th_teacher": "박소영/61",
          "8th_teacher": "박소영/61",
          "10th_teacher": "박소영/61"
        },
        "leave_seat_teacher": {
          "7th_teacher": "최병준/83",
          "8th_teacher": "최병준/83",
          "10th_teacher": "최병준/83"
        },
        "night_teacher": null
      },
      {
        "week": "6월 5주차",
        "day": "6월 25일 (수)",
        "date": "2025-06-25",
        "self_study_teacher": {
          "7th_teacher": "김신애/58",
          "8th_teacher": "김신애/58",
          "10th_teacher": "김신애/58"
        },
        "leave_seat_teacher": {
          "7th_teacher": "김규봉/55",
          "8th_teacher": "김규봉/55",
          "10th_teacher": "김규봉/55"
        },
        "night_teacher": null
      },
      {
        "week": "6월 5주차",
        "day": "6월 26일 (목)",
        "date": "2025-06-26",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "박제현/63",
          "10th_teacher": "박제현/63"
        },
        "leave_seat_teacher": {
          "7th_teacher": "정희철/79",
          "8th_teacher": "정희철/79",
          "10th_teacher": "정희철/79"
        },
        "night_teacher": null
      },
      {
        "week": "6월 6주차",
        "day": "6월 30일 (월)",
        "date": "2025-06-30",
        "self_study_teacher": {
          "7th_teacher": null,
          "8th_teacher": "이나영/71",
          "10th_teacher": "이나영/71"
        },
        "leave_seat_teacher": {
          "7th_teacher": "김미영/56",
          "8th_teacher": "김미영/56",
          "10th_teacher": "김미영/56"
        },
        "night_teacher": null
      }
    ]
  };

  const weeklyData = groupByWeek(supervisionMockData.data);

  return (
    <S.Wrapper>
      <MonthSelector selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      <S.SupervisionList>
        {weeklyData.map((weekGroup, index) => (
          <SupervisionItem key={index} weekData={weekGroup} />
        ))}
      </S.SupervisionList>
    </S.Wrapper>
  );
}