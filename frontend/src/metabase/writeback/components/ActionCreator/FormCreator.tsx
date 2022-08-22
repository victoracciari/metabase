import React from "react";

import {
  FormItemWrapper,
  FormCreatorWrapper,
  FormItemName,
  Input,
  FormSettings,
} from "./FormCreator.styled";

import Icon from "metabase/components/Icon";

import type { TemplateTag } from "metabase-types/types/Query";

export function FormCreator({ tags }: { tags: TemplateTag[] }) {
  console.log("tags", tags);
  return (
    <FormCreatorWrapper>
      {tags.map(tag => (
        <FormItem key={tag.id} tag={tag} />
      ))}
    </FormCreatorWrapper>
  );
}

function FormItem({ tag }: { tag: TemplateTag }) {
  console.log({ tag });
  const name = tag.name;
  return (
    <FormItemWrapper>
      <FormItemName>{name}</FormItemName>
      <FormSettings>
        <div>
          <Input placeholder="placeholder" />
          <Input placeholder="default" />
        </div>
        <Icon name="gear" size={16} />
      </FormSettings>
    </FormItemWrapper>
  );
}
