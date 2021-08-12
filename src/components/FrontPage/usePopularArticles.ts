import fetchPopularArticles from "@/api/popularArticles";
import { onMounted, Ref, ref } from "vue";

export interface Article {
  title: string;
  imageLink: string;
  articleLink: string;
}

export default function usePopularArticles(): { articles: Ref<Article[]> } {
  const articles = ref<Article[]>([]);
  const getPopular = async () => {
    articles.value = await fetchPopularArticles();
  };

  onMounted(getPopular);

  return {
    articles
  };
}