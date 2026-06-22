import mongoose from 'mongoose';
export declare const pincards: mongoose.Model<{
    cardId: string;
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    content: string;
    coordinates?: {
        x: number;
        y: number;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    cardId: string;
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    content: string;
    coordinates?: {
        x: number;
        y: number;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    cardId: string;
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    content: string;
    coordinates?: {
        x: number;
        y: number;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    cardId: string;
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    content: string;
    coordinates?: {
        x: number;
        y: number;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    cardId: string;
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    content: string;
    coordinates?: {
        x: number;
        y: number;
    } | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    cardId: string;
    roomId: string;
    createdBy: mongoose.Types.ObjectId;
    content: string;
    coordinates?: {
        x: number;
        y: number;
    } | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=pincard.d.ts.map