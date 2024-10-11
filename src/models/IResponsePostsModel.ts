import {IPost} from "./IPost";

export interface IResponsePostsModel {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}