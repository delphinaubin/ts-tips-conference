/**
 *
 * Useless comment to have the code in the middle of the screen 😛
 *
 *
 *
 */

type SlideSingleTransition = "none" | "fade" | "slide" | "convex" | "concave" | "zoom";

export type SlideTransition =
  | SlideSingleTransition
  | `${SlideSingleTransition}-in ${SlideSingleTransition}-out`;
