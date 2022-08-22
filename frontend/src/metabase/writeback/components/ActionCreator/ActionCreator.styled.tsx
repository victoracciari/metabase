import styled from "@emotion/styled";
import { color, alpha, lighten } from "metabase/lib/colors";
import { space } from "metabase/styled-components/theme";

export const ActionCreatorBodyContainer = styled.div`
  padding: ${space(2)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${space(2)};
  .react-resizable-handle {
    display: none;
  }
`;
