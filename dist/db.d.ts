import mongoose from "mongoose";
import { Types } from "mongoose";
interface user {
    username: string;
    email: string;
    password: string;
}
interface todo {
    title: string;
    discription: String;
    timestamps: boolean;
    compelete: boolean;
    userid: Types.ObjectId;
    content: [];
}
declare const user: mongoose.Schema<user, mongoose.Model<user, any, any, any, mongoose.Document<unknown, any, user, any, {}> & user & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, user, mongoose.Document<unknown, {}, mongoose.FlatRecord<user>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<user> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
declare const todo: mongoose.Schema<todo, mongoose.Model<todo, any, any, any, mongoose.Document<unknown, any, todo, any, {}> & todo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, todo, mongoose.Document<unknown, {}, mongoose.FlatRecord<todo>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<todo> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserModel: mongoose.Model<user, {}, {}, {}, mongoose.Document<unknown, {}, user, {}, mongoose.DefaultSchemaOptions> & user & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<user, mongoose.Model<user, any, any, any, mongoose.Document<unknown, any, user, any, {}> & user & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, user, mongoose.Document<unknown, {}, mongoose.FlatRecord<user>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<user> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const todoModel: mongoose.Model<todo, {}, {}, {}, mongoose.Document<unknown, {}, todo, {}, mongoose.DefaultSchemaOptions> & todo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<todo, mongoose.Model<todo, any, any, any, mongoose.Document<unknown, any, todo, any, {}> & todo & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, todo, mongoose.Document<unknown, {}, mongoose.FlatRecord<todo>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<todo> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
//# sourceMappingURL=db.d.ts.map