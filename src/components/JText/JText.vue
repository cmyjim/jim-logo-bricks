<template>
  <component :is="tag" :style="styleProps" @click="handleClick" class="j-txt-component">
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useComponentCommon from '../../hooks/useComponentCommon'
import {transformToComponentProps, textDefaultProps,textStylePropNames} from "../../defaultProps"
const defaultProps = transformToComponentProps(textDefaultProps)
export default defineComponent({
  name: "j-text",
  props: {
   
    tag: {
      type: String,
      default: "div",
    },
    ...defaultProps
  },
  setup(props) {
    const {styleProps,handleClick} = useComponentCommon(props,textStylePropNames)
    return {
      styleProps,
      handleClick
    };
  },
});
</script>
<style scoped>
h2.j-txt-component, p.j-txt-component{
    margin-bottom: 0;
}
button.j-txt-component{
    padding: 5px 10px;
}
.j-txt-component{
    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative !important;
}
</style>
