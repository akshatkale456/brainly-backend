import mongoose from "mongoose";
import 'dotenv/config';
export declare const users: mongoose.Model<{
    firstName: string;
    lastName: string;
    email: string;
    hashedpassword: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    firstName: string;
    lastName: string;
    email: string;
    hashedpassword: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    firstName: string;
    lastName: string;
    email: string;
    hashedpassword: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    firstName: string;
    lastName: string;
    email: string;
    hashedpassword: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    firstName: string;
    lastName: string;
    email: string;
    hashedpassword: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    firstName: string;
    lastName: string;
    email: string;
    hashedpassword: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=usermodal.d.ts.map