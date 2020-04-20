import { createMuiTheme } from "@material-ui/core/styles";
const purple = "#7b1fa2";
const destroy = "#f44336";
const destroyHover = "#b71c1c";
const saveHover = "#2e7d32";
const save = "#00e676";
export const theme = createMuiTheme({
  palette: {
    common: {
      purple: purple,
      destroy: destroy,
      save: save,
      destroyHover: destroyHover,
      saveHover: saveHover,
    },
    palette: {
      primary: {
        main: "#7b1fa2",
        destroy: destroy,
        save: save,
      },

      secondary: {
        main: "#26c6da",
      },
    },
  },
});
