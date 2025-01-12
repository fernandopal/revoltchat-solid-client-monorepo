import { styled } from "solid-styled-components";

export interface Props {
  readonly palette?: "primary" | "secondary";
}

export const Input = styled("input")<Props>`
  width: 100%;
  margin: 0.2em 0;
  padding: 0.75em 1em;

  font-size: 0.9375rem;
  font-family: inherit;
  font-weight: 500;

  outline: none;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme!.borderRadius.md};

  transition: 0.1s ease-in-out all;

  &:disabled {
    filter: brightness(0.9);
  }

  &:focus-visible {
    box-shadow: 0 0 0 1.5pt ${({ theme }) => theme!.colours.accent};
  }

  color: ${(props) =>
    props.theme!.colours[
      props.palette === "primary" ? "foreground" : "foreground-100"
    ]};

  background: ${(props) =>
    props.theme!.colours[
      props.palette === "primary" ? "background-200" : "background-100"
    ]};

  &:hover {
    background: ${(props) =>
      props.theme!.colours[
        props.palette === "primary" ? "background-100" : "background-200"
      ]};
  }

  &:invalid {
    border-color: ${(props) => props.theme!.colours["status-busy"]};
  }

  &:focus {
    outline-offset: 4px;
    border-color: ${(props) => props.theme!.colours["status-idle"]};
  }

  &:valid {
    border-color: transparent;
  }

  /* Override Chrome's ugly autofill colours */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px
      ${(props) => props.theme!.colours["background-100"]} inset !important;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme!.colours["foreground"]} !important;
  }
`;
