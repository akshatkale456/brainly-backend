import mongoose from 'mongoose';
export declare const rooms: mongoose.Model<{
    roomid: string;
    activeUser: mongoose.Types.ObjectId[];
    ownerid: mongoose.Types.ObjectId;
    roomName?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    roomid: string;
    activeUser: mongoose.Types.ObjectId[];
    ownerid: mongoose.Types.ObjectId;
    roomName?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    roomid: string;
    activeUser: mongoose.Types.ObjectId[];
    ownerid: mongoose.Types.ObjectId;
    roomName?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    roomid: string;
    activeUser: mongoose.Types.ObjectId[];
    ownerid: mongoose.Types.ObjectId;
    roomName?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    roomid: string;
    activeUser: mongoose.Types.ObjectId[];
    ownerid: mongoose.Types.ObjectId;
    roomName?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    roomid: string;
    activeUser: mongoose.Types.ObjectId[];
    ownerid: mongoose.Types.ObjectId;
    roomName?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=room.d.ts.map