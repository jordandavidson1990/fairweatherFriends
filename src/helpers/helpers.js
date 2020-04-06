import { lazy } from "react";
export const lazyLoad = (page) => {
  return lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import(`../pages/${page}`)), 300);
    });
  });
};
