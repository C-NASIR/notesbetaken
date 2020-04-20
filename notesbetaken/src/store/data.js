const initialData = {
  name: "Title",
  definition:
    "onsumption of goods and services by different agents. Understood in its broadest sense, 'The economy is defined as a social domain that emphasize the practices, discourses, and material expressions associated with the",
  notes: [
    {
      id: 1,
      title: "Title 1",
      subtitle: "This is subtitle aboutr the information and somw jdecjcdcdcdc",
      note:
        "After refusing for weeks to hold oral arguments via video conference, on Monday the Supreme Court reversed a lower court ruling that would have extended the deadline for Wisconsin voters to send in their absentee ballots. Put simply, they made it harder for the people of Wisconsin, who are grappling with the health impact of coronavirus and pending economic uncertainty, to vote. The primary was taking place Tuesday.",
    },
    {
      id: 2,
      title: "Title 1",
      subtitle: "This is subtitle aboutr the information and somw jdecjcdcdcdc",
      note:
        "After refusing for weeks to hold oral arguments via video conference, on Monday the Supreme Court reversed a lower court ruling that would have extended the deadline for Wisconsin voters to send in their absentee ballots. Put simply, they made it harder for the people of Wisconsin, who are grappling with the health impact of coronavirus and pending economic uncertainty, to vote. The primary was taking place Tuesday.",
    },
    {
      id: 3,

      title: "Title 1",
      subtitle: "This is subtitle aboutr the information and somw jdecjcdcdcdc",
      note:
        "After refusing for weeks to hold oral arguments via video conference, on Monday the Supreme Court reversed a lower court ruling that would have extended the deadline for Wisconsin voters to send in their absentee ballots. Put simply, they made it harder for the people of Wisconsin, who are grappling with the health impact of coronavirus and pending economic uncertainty, to vote. The primary was taking place Tuesday.",
    },
    {
      id: 4,

      title: "Title 1",
      subtitle: "This is subtitle aboutr the information and somw jdecjcdcdcdc",
      note:
        "After refusing for weeks to hold oral arguments via video conference, on Monday the Supreme Court reversed a lower court ruling that would have extended the deadline for Wisconsin voters to send in their absentee ballots. Put simply, they made it harder for the people of Wisconsin, who are grappling with the health impact of coronavirus and pending economic uncertainty, to vote. The primary was taking place Tuesday.",
    },
    {
      id: 5,

      title: "Title 1",
      subtitle: "This is subtitle aboutr the information and somw jdecjcdcdcdc",
      note:
        "After refusing for weeks to hold oral arguments via video conference, on Monday the Supreme Court reversed a lower court ruling that would have extended the deadline for Wisconsin voters to send in their absentee ballots. Put simply, they made it harder for the people of Wisconsin, who are grappling with the health impact of coronavirus and pending economic uncertainty, to vote. The primary was taking place Tuesday.",
    },
  ],
};
export default function () {
  return {
    Economy: initialData,
    Comm: initialData,
    Philosophy: initialData,
    ReactJS: initialData,
    TabActiveIndex: 0,
    NavTabs: [
      { name: "Home", path: "/", activeIndex: 0 },
      { name: "Economy", path: "/economy", activeIndex: 1 },
      { name: "Communication", path: "/communication", activeIndex: 2 },
      { name: "Philosophy", path: "/philosophy", activeIndex: 3 },
      { name: "React Js", path: "/reactjs", activeIndex: 4 },
    ],
    value: 0,
  };
}
