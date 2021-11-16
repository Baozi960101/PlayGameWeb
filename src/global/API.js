const MainURL = "https://argus.work/argus/api/v1";

export const TestURL = `${MainURL}/data?key=高雄市&start_date=2021-11-15&end_date=2021-11-15&crawler_Web=chinatimes`;

export const TestURL02 = `${MainURL}/data?key=台北市&start_date=2021-11-15&end_date=2021-11-15&crawler_Web=chinatimes`;

export function FetchTestAPI() {
  return fetch(TestURL).then((res) => res.json());
}

export function FetchTestAPI02() {
  return fetch(TestURL02).then((res) => res.json());
}

export const AloneApi = (id) => {
  return `${MainURL}/data/${id}`;
};