import fs from "fs";

const fileDir = process.argv[2];
const fileName = fileDir.split("/").pop();

if (!fileDir) {
  throw new Error("No file directory is provided");
}

const vueTemplate = `<template>
  <div>Hello ${fileName}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "${fileName}",
});
</script>
`;

const testTemplate = `
import { shallowMount } from "@vue/test-utils";
import ${fileName} from "@/components/${fileDir}.vue";

describe("${fileDir}", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(${fileName});
    expect(wrapper.text()).toMatch("${fileName}");
  });
});

`;

const componentFile = "./src/components/" + fileDir + ".vue";
const testFile = "./tests/unit/" + fileDir + ".spec.ts";

if (!fs.existsSync(componentFile)) {
  fs.writeFileSync(componentFile, vueTemplate);
  console.log(`Component was created at ${componentFile}`);
} else {
  console.warn(`WARN: Component at ${componentFile} already exists`);
}
if (!fs.existsSync(testFile)) {
  fs.writeFileSync(testFile, testTemplate);
  console.log(`Test file was created at ${componentFile}`);
} else {
  console.warn(`WARN: Test at ${testFile} already exists`);
}
