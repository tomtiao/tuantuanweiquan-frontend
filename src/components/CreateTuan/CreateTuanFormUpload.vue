<template>
  <div class="control">
      <span class="label">{{ label }}</span>
      <div class="preview" ref="previewBox"></div>
      <label :for="uniqueId" class="button-like">上传图片</label>
      <input @change="onSelectImage($event, previewBox)" type="file" :id="uniqueId" class="field" accept="image/*" hidden>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';

let uniqueId = 0;
export default defineComponent({
  name: 'CreateTuanFormUpload',
  props: {
    labelContent: {
      type: String,
      required: true
    }
  },
  setup(props) {
    uniqueId += 1;

    const onSelectImage = (evt: Event, container: HTMLElement) => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const input = evt.target;
      if (!(input instanceof HTMLInputElement)) throw new TypeError(`${evt} is not triggered by input.`);
      const files = input.files;
      if (files === null) throw new TypeError(`${evt} is not triggered by <input type='file'>`);
      if (files.length > 0) {
        for (const file of files) {
          const img = document.createElement('img');
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'contain';
          img.addEventListener('load', function cleanUp() {
            URL.revokeObjectURL(img.src);
            img.removeEventListener('load', cleanUp);
          });
          img.src = URL.createObjectURL(file);

          container.append(img);
        }
      }
    };

    const previewBox = ref<HTMLElement | null>(null);

    const { labelContent: label } = toRefs(props);
    return {
      uniqueId,
      previewBox,
      label,
      onSelectImage
    };
  }
});
</script>

<style scoped>
.control {
  display: flex;
  align-items: center;
}
.label {
  width: 9em;
  line-height: 50px;
  text-align: right;
}
.label::after {
  content: "：";
}
.field {
  height: 40px;
  border: unset;
  background-color: #f2f2f2;
}
.preview {
  width: 178px;
  height: 97px;
  background: no-repeat center/contain url('../../assets/pic.png'), #f2f2f2;
}
.button-like {
  color: #8a8a8a;
  align-self: flex-start;
  display: block;
  width: 100px;
  height: 25px;
  border: 1px solid #cdcdcd;
  margin-left: 1em;
  font-size: 12px;
  line-height: 25px;
  background-color: #f2f2f2;
  font-family: "Source Han Sans CN Regular";
}
</style>
