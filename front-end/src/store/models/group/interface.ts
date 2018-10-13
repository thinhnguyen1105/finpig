export interface GroupState {
    groups: Group[]
}

export interface Group {
    _id: string;
    name: string;
    description: string;
    goal: number;
    user: string[];
    budget: string
}
