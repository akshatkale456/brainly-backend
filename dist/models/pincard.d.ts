import mongoose from 'mongoose';
export declare const pincards: mongoose.Model<{
    type: string;
    priority: "low" | "high" | "medium";
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    content?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: string;
    priority: "low" | "high" | "medium";
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    content?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    type: string;
    priority: "low" | "high" | "medium";
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    content?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: string;
    priority: "low" | "high" | "medium";
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    content?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: string;
    priority: "low" | "high" | "medium";
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    content?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    type: string;
    priority: "low" | "high" | "medium";
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    content?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=pincard.d.ts.map