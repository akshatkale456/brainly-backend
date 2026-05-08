import mongoose from "mongoose";
export declare const Todo: mongoose.Model<{
    description: string;
    userId: mongoose.Types.ObjectId;
    title: string;
    status: "completed" | "incomplete";
    priority: "high" | "medium" | "low";
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    description: string;
    userId: mongoose.Types.ObjectId;
    title: string;
    status: "completed" | "incomplete";
    priority: "high" | "medium" | "low";
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    description: string;
    userId: mongoose.Types.ObjectId;
    title: string;
    status: "completed" | "incomplete";
    priority: "high" | "medium" | "low";
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    description: string;
    userId: mongoose.Types.ObjectId;
    title: string;
    status: "completed" | "incomplete";
    priority: "high" | "medium" | "low";
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    description: string;
    userId: mongoose.Types.ObjectId;
    title: string;
    status: "completed" | "incomplete";
    priority: "high" | "medium" | "low";
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    description: string;
    userId: mongoose.Types.ObjectId;
    title: string;
    status: "completed" | "incomplete";
    priority: "high" | "medium" | "low";
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=todoModel.d.ts.map