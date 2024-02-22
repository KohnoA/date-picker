interface InputThemeType {
  label: string;
  placeholder: string;
  text: string;
  icons: string;
  background: string;
  border: string;
  error: string;
}

interface CalendarThemeType {
  background: string;
  border: string;
  text: string;
  icons: string;
  hover: string;
  cell: {
    active: string;
    range: string;
    holiday: string;
    indicator: string;
  };
}

interface TodosThemeType {
  backdrop: string;
  background: string;
  text: string;
  placeholder: string;
  icons: string;
  border: string;
  addButton: {
    text: string;
    background: string;
  };
}

interface GeneralThemeType {
  maxWidth: string;

  fontFamily: string;

  fontSizes: {
    lg: string;
    md: string;
    sm: string;
  };

  borderRadius: {
    high: string;
    low: string;
  };

  opacity: {
    low: string;
    high: string;
  };

  margin: {
    lg: string;
    sm: string;
  };

  duration: string;
}

export type ThemeType = Partial<{
  input: Partial<InputThemeType>;
  calendar: Partial<CalendarThemeType>;
  todos: Partial<TodosThemeType>;
  general: Partial<GeneralThemeType>;
}>;
