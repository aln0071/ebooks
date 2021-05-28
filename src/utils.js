export const savePage = ({ title, html, id }) => {
  const allData = getAllData();
  const index = allData.findIndex((ob) => ob.id === id);
  const newData = {
    id,
    title,
    html,
  };
  if (index === -1) {
    allData.push(newData);
  } else {
    addData[index] = newData;
  }
  window.localStorage.setItem('pages', JSON.stringify(allData));
};

export const getAllData = () => JSON.parse(window.localStorage.getItem('pages')) || [];

export const getPage = (id) => {
  const allData = getAllData();
  const index = allData.findIndex((ob) => ob.id === id);
  if (index !== -1) {
    return {
      ...allData[index],
    };
  }
  return null;
};

export const getNewPageId = () => {
  const allData = getAllData();
  if (allData.length === 0) {
    return 0;
  }
  const lastPage = allData.slice(-1)[0];
  return parseInt(lastPage.id) + 1;
};
