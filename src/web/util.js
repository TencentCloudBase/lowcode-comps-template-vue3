import { applyVueInReact } from 'veaury';
import React from 'react';
import propTypes from 'prop-types';

export const WedaVue3Wrapper = ({
  vSlot,
  component,
  events,
  $node, // 平台传入参数，不要传入 Vue 组件
  $widget, // 平台传入参数，不要传入 Vue 组件
  ...props
}) => {
  const Component = React.useMemo(
    () => applyVueInReact(component),
    [component]
  );

  // https://vuejs.org/guide/extras/render-function.html#v-on
  // 监听 Vue 组件事件的函数需要以 onXXX 的形式传入
  const listenerMap =
    component.emits
      ?.filter((eventName) => eventName.length !== 0)
      .reduce((map, eventName) => {
        const key = `on${eventName[0].toUpperCase()}${eventName.substring(1)}`;
        map[key] = events[eventName];
        return map;
      }, {}) ?? {};

  return (
    <Component {...props} {...listenerMap}>
      {vSlot}
    </Component>
  );
};

WedaVue3Wrapper.propTypes = {
  vSlot: propTypes.objectOf(propTypes.element),
  component: propTypes.object,
  events: propTypes.objectOf(propTypes.func),
  $node: propTypes.any,
  $widget: propTypes.any,
};
