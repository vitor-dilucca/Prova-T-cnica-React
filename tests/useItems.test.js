import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe("useItems hook", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems());

    expect(result.current.items.length).toBe(0);

    //act serve para realizar ações assíncronas
    act(() => {
      result.current.addItem("Jugar juegos");
      result.current.addItem("Ir a correr");
    });

    expect(result.current.items.length).toBe(2);

    act(() => {
      result.current.removeItem("Jugar juegos");
    });

    console.log(result.current.items);
  });
});
