import mongoose from "mongoose";
export declare const calendars: mongoose.Model<{
    title: string;
    userid: mongoose.Types.ObjectId;
    startTime: NativeDate;
    endTime: NativeDate;
    description?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    title: string;
    userid: mongoose.Types.ObjectId;
    startTime: NativeDate;
    endTime: NativeDate;
    description?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    title: string;
    userid: mongoose.Types.ObjectId;
    startTime: NativeDate;
    endTime: NativeDate;
    description?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    userid: mongoose.Types.ObjectId;
    startTime: NativeDate;
    endTime: NativeDate;
    description?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    userid: mongoose.Types.ObjectId;
    startTime: NativeDate;
    endTime: NativeDate;
    description?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    title: string;
    userid: mongoose.Types.ObjectId;
    startTime: NativeDate;
    endTime: NativeDate;
    description?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=calendar.d.ts.map