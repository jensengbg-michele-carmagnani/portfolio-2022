import { PortableText } from '@portabletext/react';
import React from 'react';
import { Block } from '../typing.d';

type Props = {
  text: Block[];
};

const PortableComponent = ({ text }: Props) => {
  return <PortableText value={text} />;
};

export default PortableComponent;
