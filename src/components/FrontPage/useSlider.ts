import fetchSliderInfo from "@/api/sliderInfo";
import { onMounted, Ref, ref } from "vue";

export type SliderInfo = Record<'title' | 'imageLink' | 'link', string>;

export default function useSlider(): { sliders: Ref<SliderInfo[]> } {
  const sliders = ref<SliderInfo[]>([]);
  const getSlider = async () => {
    sliders.value = await fetchSliderInfo();
  };
  
  onMounted(getSlider);

  return {
    sliders
  };
}