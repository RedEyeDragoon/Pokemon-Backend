import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class pokemon {
    @Field()
    name: string;
}