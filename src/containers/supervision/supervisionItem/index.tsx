import * as S from "./style";

interface SupervisionItemProps {
  weekData: {
    week: string;
    items: {
      date: string;
      day: string;
      week: string;
      self_study_teacher: {
        "7th_teacher": string | null;
        "8th_teacher": string | null;
        "10th_teacher": string | null;
      };
      leave_seat_teacher: {
        "7th_teacher": string | null;
        "8th_teacher": string | null;
        "10th_teacher": string | null;
      };
      night_teacher: string | null;
    }[];
  };
}

export default function SupervisionItem({ weekData }: SupervisionItemProps) {
  return (
    <S.Wrapper>
      <S.ItemSet>
        <S.Item>
          <S.ItemContent>날짜</S.ItemContent>
          <S.ItemContent>역할</S.ItemContent>
          <S.ItemContent>7교시</S.ItemContent>
          <S.ItemContent>8~9교시</S.ItemContent>
          <S.ItemContent>10~11교시</S.ItemContent>
          <S.ItemContent>야간</S.ItemContent>
        </S.Item>
        <S.Divider />
      </S.ItemSet>
      {weekData.items.map((item, index) => (
        <>
          <S.DataSet key={index} isNull={item.date === ""}>
            <S.DataSetHeader>
              <S.DataSetHeaderContent>{item.day}</S.DataSetHeaderContent>
              <S.DataSetHeaderBottom>
                <S.ItemContent>자습</S.ItemContent>
                <S.ItemContent>이석</S.ItemContent>
              </S.DataSetHeaderBottom>
            </S.DataSetHeader>
            <S.DataSetContent>
              <S.DataSetContentSelfStudy>
                <div>{item.self_study_teacher["7th_teacher"] ? item.self_study_teacher["7th_teacher"].split('/')[0] : "X"}</div>
                <div>{item.self_study_teacher["8th_teacher"] ? item.self_study_teacher["8th_teacher"].split('/')[0] : "X"}</div>
                <div>{item.self_study_teacher["10th_teacher"] ? item.self_study_teacher["10th_teacher"].split('/')[0] : "X"}</div>
                <div>{item.night_teacher ? item.night_teacher : "X"}</div>
              </S.DataSetContentSelfStudy>
              <S.DataSetContentLeaveSeat>
                <div>{item.leave_seat_teacher["7th_teacher"] ? item.leave_seat_teacher["7th_teacher"].split('/')[0] : "X"}</div>
                <div>{item.leave_seat_teacher["8th_teacher"] ? item.leave_seat_teacher["8th_teacher"].split('/')[0] : "X"}</div>
                <div>{item.leave_seat_teacher["10th_teacher"] ? item.leave_seat_teacher["10th_teacher"].split('/')[0] : "X"}</div>
                <div>{item.night_teacher ? item.night_teacher : "X"}</div>
              </S.DataSetContentLeaveSeat>
            </S.DataSetContent>
          </S.DataSet>
          {index < weekData.items.length - 1 && <S.Divider />}
        </>
      ))
      }
    </S.Wrapper >
  );
}