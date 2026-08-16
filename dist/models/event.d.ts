import mongoose from "mongoose";
export declare const events: mongoose.Model<{
    date: NativeDate;
    title: string;
    userid: mongoose.Types.ObjectId;
    description?: string | null;
    location?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    date: NativeDate;
    title: string;
    userid: mongoose.Types.ObjectId;
    description?: string | null;
    location?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    date: NativeDate;
    title: string;
    userid: mongoose.Types.ObjectId;
    description?: string | null;
    location?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    date: NativeDate;
    title: string;
    userid: mongoose.Types.ObjectId;
    description?: string | null;
    location?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    date: NativeDate;
    title: string;
    userid: mongoose.Types.ObjectId;
    description?: string | null;
    location?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    date: NativeDate;
    title: string;
    userid: mongoose.Types.ObjectId;
    description?: string | null;
    location?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=event.d.ts.map