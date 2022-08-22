import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import type { ActionType } from "metabase/writeback/types";

import { ActionCreatorHeader } from "./ActionCreatorHeader";
import { QueryActionEditor } from "./QueryActionEditor";
import { FormCreator } from "./FormCreator";

import { ActionCreatorBodyContainer } from "./ActionCreator.styled";

import { getMetadata } from "metabase/selectors/metadata";

import type { State } from "metabase-types/store";
import type Question from "metabase-lib/lib/Question";

import { newQuestion } from "./utils";

const mapStateToProps = (state: State) => ({
  metadata: getMetadata(state),
});

function ActionCreatorComponent({
  metadata,
  question: passedQuestion,
}: {
  metadata: any;
  question: Question;
}) {
  const [actionType, setActionType] = useState<ActionType>("query");
  const [actionName, setActionName] = useState("New Action");
  const [question, setQuestion] = useState(
    passedQuestion ?? newQuestion(metadata),
  );

  useEffect(() => {
    setQuestion(passedQuestion ?? newQuestion(metadata));
  }, [metadata, passedQuestion]);

  if (!question || !metadata) {
    return null;
  }

  return (
    <div>
      <ActionCreatorHeader
        type={actionType}
        onChangeType={setActionType}
        name={actionName}
        onChangeName={setActionName}
        onCommit={() => null}
        canSave={true}
      />
      <ActionCreatorBodyContainer>
        <QueryActionEditor question={question} setQuestion={setQuestion} />
        <FormCreator tags={question.query()?.templateTagsWithoutSnippets()} />
      </ActionCreatorBodyContainer>
    </div>
  );
}

export const ActionCreator = connect(
  mapStateToProps,
  null,
)(ActionCreatorComponent);
