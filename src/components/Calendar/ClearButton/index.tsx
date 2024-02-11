import { ClearButtonContainer, ClearButtonOwnButton } from './styled';

interface ClearButtonProps {
  onClear: () => void;
}

export const ClearButton = ({ onClear }: ClearButtonProps) => (
  <ClearButtonContainer>
    <ClearButtonOwnButton onClick={onClear}>Clear</ClearButtonOwnButton>
  </ClearButtonContainer>
);
