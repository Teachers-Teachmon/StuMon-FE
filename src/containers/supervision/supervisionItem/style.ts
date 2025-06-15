import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const ItemSet = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;
export const ItemContent = styled.div`
  text-align: left;
  padding: 8px 20px;
  background-color: #EBF1FF;
  border-radius: 0.5rem;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #e0e0e0;
`;

export const DataSet = styled.div<{ isNull: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${(p) => (p.isNull ? 0 : 1)};
`;

export const DataSetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const DataSetHeaderContent = styled.h3`
  font-weight: bold;
  margin: 0;
  padding: 2.5px 20px;
`;

export const DataSetHeaderBottom = styled.div`
  width: 100%;  
  display: flex;
  gap: 2rem;
  padding: 8px 20px;
`;

export const DataSetContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  text-align: center;
`;

export const DataSetContentSelfStudy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const DataSetContentLeaveSeat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;