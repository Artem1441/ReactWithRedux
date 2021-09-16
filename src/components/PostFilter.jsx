import React from "react";
import { AppInput } from "./ui/input/AppInput";
import { AppSelect } from "./ui/select/AppSelect";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <AppInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <AppSelect
        defaultValue="Сортировка"
        options={[
          {
            value: "title",
            name: "По названию",
          },
          {
            value: "body",
            name: "По описанию",
          },
        ]}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
};
