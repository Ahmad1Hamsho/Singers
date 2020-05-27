const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
const table = document.getElementById("tableContainer1");
const displaySingers = (singers) => {
  table.innerHTML = " ";
  singers.forEach((s) => {
    table.innerHTML += `<tr><td>${s.name}</td> <td>${s.country}</td> <td>${s.period_active.start} ${s.period_active.end}</td> <td>${s.genre}</td></tr>`;
  });
};
let na = () => {
  let a = singers.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    }
  });
  displaySingers(a);
};
let country = () => {
  let a = singers.sort((a, b) => {
    if (a.country > b.country) {
      return 1;
    } else if (a.country < b.country) {
      return -1;
    }
  });
  displaySingers(a);
};
let genre = () => {
  let a = singers.sort((a, b) => {
    if (a.genre > b.genre) {
      return 1;
    } else if (a.genre < b.genre) {
      return -1;
    }
  });
  displaySingers(a);
};
let pa = () => {
  let a = singers.sort((a, b) => {
    return a.period_active.start - b.period_active.start;
  });
  displaySingers(a);
};

const searcH = () => {
  const search = document.getElementById("searchInput").value;
  let a = singers.filter((s) => {
    return (
      s.name.includes(search) ||
      s.country.includes(search) ||
      s.genre.includes(search)
    );
  });
  displaySingers(a);
};
displaySingers(singers);
