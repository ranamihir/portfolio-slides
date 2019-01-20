import React from 'react';

import EmptyTemplate from './hoc/empty';
import DefaultTemplate from './hoc/default';
import SummaryTemplate from './hoc/summary';
import TimelineTemplate from './hoc/timeline';

const AvailableTemplates = {
  empty: props => <EmptyTemplate {...props} />,
  default: props => <DefaultTemplate {...props} />,
  summary: props => <SummaryTemplate {...props} />,
  timeline: props => <TimelineTemplate {...props} />,
};

const getTemplate = (templateName, key = 0, props = {}) => {
  const T = AvailableTemplates[templateName];
  return <T key={key} {...props} />;
};

export default AvailableTemplates;
export { getTemplate };
