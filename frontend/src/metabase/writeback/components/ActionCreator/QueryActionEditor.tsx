import React from "react";

import type Question from "metabase-lib/lib/Question";
import type { DatasetQuery } from "metabase-types/types/Card";

import NativeQueryEditor from "metabase/query_builder/components/NativeQueryEditor";

export function QueryActionEditor({
  question,
  setQuestion,
}: {
  question: Question;
  setQuestion: (q: Question) => void;
}) {
  return (
    <div style={{ height: 600 }}>
      <NativeQueryEditor
        // question={question}
        query={question.query()}
        viewHeight={600}
        setDatasetQuery={(newQuery: DatasetQuery) =>
          setQuestion(question.setDatasetQuery(newQuery))
        }
        enableRun={false}
        hasEditingSidebar
        isNativeEditorOpen
        hasParametersList={false}
        resizable={false}
        readOnly={false}
      />
    </div>
  );
}
