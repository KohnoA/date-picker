import { memo } from 'react';

import { ClearButtonContainer, ClearButtonOwnButton } from './styled';

interface ClearButtonProps {
  onClear: () => void;
}

export const ClearButton = memo(({ onClear }: ClearButtonProps) => (
  <ClearButtonContainer>
    <ClearButtonOwnButton data-testid="calendar-clear-button" onClick={onClear}>
      Clear
    </ClearButtonOwnButton>
  </ClearButtonContainer>
));
