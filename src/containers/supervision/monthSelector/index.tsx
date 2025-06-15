import styled from "@emotion/styled";
import LeftArrowDouble from '../../../assets/icons/left-arrow-double.svg';
import RightArrowDouble from '../../../assets/icons/right-arrow-double.svg';

interface MonthSelectorProps {
  selectedMonth: number;
  onMonthChange: (month: number) => void;
}

export default function MonthSelector({ selectedMonth, onMonthChange }: MonthSelectorProps) {
  const prevMonth = selectedMonth === 1 ? 12 : selectedMonth - 1;
  const nextMonth = selectedMonth === 12 ? 1 : selectedMonth + 1;
  const months = [prevMonth, selectedMonth, nextMonth];

  return (
    <Wrapper>
      <MonthArrow onClick={() => onMonthChange(prevMonth)}>
        <img src={LeftArrowDouble} alt="이전 달" />
      </MonthArrow>

      <MonthList>
        {months.map((m) => (
          <Month key={m} selected={m === selectedMonth} onClick={() => onMonthChange(m)}>{m}월</Month>
        ))}
      </MonthList>

      <MonthArrow onClick={() => onMonthChange(nextMonth)}>
        <img src={RightArrowDouble} alt="다음 달" />
      </MonthArrow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthArrow = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #2e6ff2;
  margin: 0 0.5rem;
  &:hover {
    color: #1b4fcc;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const MonthList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Month = styled.li<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  color: ${(p) => (p.selected ? "#2e6ff2" : "#555")};
  font-size: ${(p) => (p.selected ? "1.2rem" : "1rem")};
  font-weight: ${(p) => (p.selected ? 600 : 400)};
  border-radius: 0.25rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${(p) => (p.selected ? "#2e6ff2" : "#f0f0f0")};
    color: ${(p) => (p.selected ? "#fff" : "#333")};
  }
`;