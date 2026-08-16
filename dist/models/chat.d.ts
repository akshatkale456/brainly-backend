import mongoose from 'mongoose';
export declare const chats: mongoose.Model<{
    type: "server" | "client";
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: "server" | "client";
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    type: "server" | "client";
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "server" | "client";
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: "server" | "client";
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    type: "server" | "client";
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=chat.d.ts.map