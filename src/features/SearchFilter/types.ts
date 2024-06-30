export interface SearchFilterState {
  title: string | undefined;
  genre: string | undefined;
  year: string | undefined;
  page: number | undefined;
  limit: number;
}

export interface SearchFilterPanelProps {
  onFilterChange: (filters: SearchFilterState) => void;
}
