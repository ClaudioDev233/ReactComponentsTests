import * as S from "./styles";
const Radio = ({ label, labelFor, name, value, labelColor }) => {
  return (
    <>
      <S.Wrapper>
        <S.Input type="radio" id={labelFor} value={value} name={name}></S.Input>
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      </S.Wrapper>
    </>
  );
};

export default Radio;
