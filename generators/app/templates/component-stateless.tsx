import * as S from './<%= componentName %>.styles';

export type <%= componentName %>Props = {}

/* <%= componentName %> */
export default function <%= componentName %>(props: <%= componentName %>Props) {
  const {
    /* destructured props */
  } = props;

  return (
    <S.<%= componentName %>>
      This is the styled & stateless <%= componentName %> component.
    </S.<%= componentName %>>
  );
};
/* */

