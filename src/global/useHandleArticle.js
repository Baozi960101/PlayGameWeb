import { useState } from "react";
import { ScrollToTop } from "./Scroll";

//此包含引入所有文章以及換頁功能
export default function useHandleArticle() {
  const [load, setLoad] = useState(false);
  //以下是來源

  const [gameInformationSource, setGameInformationSource] = useState([]);
  const [gamingStrategySource, setGamingStrategySource] = useState([]);
  const [vehiclesSource, setVehiclesSource] = useState([]);
  const [sportsSource, setSportsSource] = useState([]);

  //以下是抓取文章 換頁set
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [nowLastPage, setNowLastPage] = useState("");

  async function FetchDate(API) {
    setLoad(true);
    const res = await fetch(API);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    setLoad(false);
  }

  async function confirmSource() {
    const res = await fetch(
      `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=playgames`
    );
    const { data } = await await res.json();
    const GameInformation = data.GameInformation.map((item) => {
      return item.source_Name;
    });
    const Vehicles = data.Vehicles.map((item) => {
      return item.source_Name;
    });
    // const GamingStrategy = data.GamingStrategy.map((item) => {
    //   return item.source_Name;
    // });
    const Sports = data.Sports.map((item) => {
      return item.source_Name;
    });
    setGameInformationSource(GameInformation.join());
    // setGamingStrategySource(GamingStrategy.join())
    setVehiclesSource(Vehicles.join());
    setSportsSource(Sports.join());
  }

  //在這裡直接新增一個一個專屬首頁的API、用asan方式解決來原先傳入再發API搜索

  async function ChangePrevPage() {
    if (page === 1) {
      alert("目前在第一頁囉");
      return;
    }
    const res = await fetch(prevPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
  }

  async function ChangeNextPage() {
    if (page === nowLastPage) {
      alert("最後一頁囉");
      return;
    }
    const res = await fetch(nextPage);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    ScrollToTop();
  }

  return {
    FetchDate,
    post,
    setPost,
    page,
    setPage,
    prevPage,
    setPrevPage,
    nextPage,
    setNextPage,
    nowLastPage,
    setNowLastPage,
    ChangeNextPage,
    ChangePrevPage,
    confirmSource,
    load,
    setLoad,
    gameInformationSource,
    gamingStrategySource,
    vehiclesSource,
    sportsSource,
  };
}
