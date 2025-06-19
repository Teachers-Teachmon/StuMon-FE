import styled from "@emotion/styled";

export const CurrentPlaceStatusContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  gap: 1rem;
  height: max-content;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  * > {
      width: 100%;
  }
    td {
        padding: 0.6rem 0;
        text-align: center;         
        vertical-align: middle;    
    }
`;

export const Tbody = styled.tbody`
  width: 100%;
  border-collapse: collapse;
  * > {
   text-align: center;
  }
    & > th{
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
export const Th = styled.th<{width?:string}>`
  width : ${(props)=>props.width};
  color : #6C757D;
  font-weight: 600;
`;

export const Status = styled.div<{isOn?:string}>`
 width : 1rem;
    height: 1rem;
    border-radius: 100%;
    display: inline-block;
    background-color: ${props => props.isOn ? "#71DAAA" : "#E74B3C"};
    color: white;
`