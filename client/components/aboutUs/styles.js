import styled, { css } from "styled-components";
import { breakpoint } from "../../frontend-config";

import { Heading2, TextBody } from "../shared/styles";

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.light};
  padding: 30px 30px 50px;
  @media (min-width: ${breakpoint("lg")}) {
    padding: 55px 30px;
  }
`;

export const SubInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 55px 20px;

  a {
    color: ${props => props.theme.colors.link};
  }

  svg {
    margin-bottom: 45px;
    width: 40%;
  }

  @media (min-width: ${breakpoint("xl")}) {
    flex-direction: row;
    gap: 60px;
    svg {
      margin-bottom: 0px;
    }
  }

  ${props =>
    props.grey &&
    css`
      background: ${props => props.theme.colors.grey};
      flex-direction: column-reverse;
      svg {
        order: 2;
        margin-bottom: 45px;
      }
      @media (min-width: ${breakpoint("xl")}) {
        svg {
          margin-bottom: 0px;
        }
      }
    `}
`;

export const Logo = styled.img`
  width: 231px;
  height: 233px;
  align-self: center;
  margin-bottom: 64px;

  @media (min-width: ${breakpoint("lg")}) {
    width: 285px;
    height: 285px;
    margin-right: 40px;
  }
`;

export const InfoBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Headline = styled(Heading2)`
  margin-bottom: 60px;
  text-align: left;
  width: 623px;
  position: relative;
  display: inline-block;
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.colors.light};
    `}
  @media (max-width: ${breakpoint("md")}) {
    font-size: 24px;
    line-height: 28px;
    max-width: 325px;
    margin-bottom: 44px;
  }
`;

export const Text = styled(TextBody)`
  max-width: 620px;
  padding: 0 8px;
  text-align: left;
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.colors.light};
    `}
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 25px;
`;

export const HeadingGroup = styled.div`
  display: flex;
`;

export const GreenBar = styled.div`
  background-color: #18e28c;
  width: 14px;
  height: 41px;
  position: relative;
  display: inline-block;
  margin-right: 15px;
`;