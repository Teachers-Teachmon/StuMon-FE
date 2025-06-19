import * as S from "./style.ts";
import BackArrow from "../../../assets/icons/backArrow.svg"
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import useDay from "../../../store/day.ts";

export default function StudentForm() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  const [cause, setCause] = useState("");

  const [student, setStudent] = useState([
    {name : "2209 윤도훈", id : 1},
    {name : "2209 윤도훈", id : 2},
    {name : "2209 윤도훈", id : 3},
    {name : "2209 윤도훈", id : 4},
    {name : "2209 윤도훈", id : 5},
  ]);
  const [search, setSearch] = useState("");
  const [selectStudent, setSelectStudent] = useState([
    {name : "2209 윤도훈", id : 1},
    {name : "2209 윤도훈", id : 2},
  ]);
  const [studentNumbers, setStudentNumbers] = useState([
    1,2
  ]);
  const location = useLocation();
  const { place, time } = location.state;
  const {day} = useDay();
  console.log(place, day, time);
  return (
    <S.TimeContainer>
      <S.ImgBox onClick={handleBack}>
        <img src={BackArrow}  alt="backIcon" />
      </S.ImgBox>
      <S.Content>
        <h2>이석 사유와 학생을 입력해주세요</h2>
        <S.DateBox>
          <S.DateTitle>사유</S.DateTitle>
          <S.Reason
            value={cause}
            onChange={(event) => setCause(event.target.value)}
            placeholder={"사유를 입력해주세요"}
          />
        </S.DateBox>
        <S.DateBox>
          <S.DateTitle>학생</S.DateTitle>
          <S.InputBox>
            <S.Input
              type={"text"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"학번이나 이름을 입력해주세요"}
            />
            <S.StudentList>
              {search && student &&
                student.map((currentItem) => {
                  if (studentNumbers.includes(currentItem.id)) {
                    return null;
                  }
                  else {
                    return (
                      <S.StudentItem
                        onClick={() => {
                          setStudentNumbers((prev) => [...prev, currentItem.id]);
                          setSelectStudent((prev) => [...prev, currentItem]);
                          setSearch("");
                        }}
                        key={currentItem.id}
                      >
                        {currentItem.name}
                      </S.StudentItem>
                    );
                  }
                })
              }
            </S.StudentList>
          </S.InputBox>
          <S.StudentBox>
            {selectStudent && selectStudent.map((item, idx) => {
            return(
            <S.Student
              key={idx}
              onClick={() =>{
                setStudentNumbers(
                  studentNumbers.filter(
                    (currentItem) => currentItem !== item.id
                  )
                )
                setSelectStudent(
                  selectStudent.filter(
                    (currentItem) => currentItem !== item
                  )
                )
              }}
            >
              <span>{item.name}</span>
            </S.Student>
            )
          })}
          </S.StudentBox>
        </S.DateBox>
      </S.Content>
      <S.Btn onClick={() => navigate("/leaveSeat")}>
        완료
      </S.Btn>
    </S.TimeContainer>
  )
}