import mongoose from 'mongoose';
export declare const chats: mongoose.Model<{
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
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
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    message: string;
    room: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=chat.d.ts.map