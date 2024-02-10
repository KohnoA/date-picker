import { CalendarHeader } from './CalendarHeader';
import { CalendarContainer } from './styled';

export const Calendar = () => {
  const onClickNextHandler = () => {};
  const onClickPrevHandler = () => {};

  return (
    <CalendarContainer>
      <CalendarHeader
        month="November"
        year={2022}
        onClickNext={onClickNextHandler}
        onClickPrev={onClickPrevHandler}
      />
    </CalendarContainer>
  );
};
