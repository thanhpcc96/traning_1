//
//  QBRequest+QBAddressBook.h
//  Quickblox
//
//  Created by Andrey Ivanov on 13/09/2017.
//  Copyright © 2017 QuickBlox. All rights reserved.
//

#import "QBRequest.h"

@class QBAddressBookContact;
@class QBAddressBookUpdates;

NS_ASSUME_NONNULL_BEGIN

typedef void(^qb_response_address_book_block_t)(NSArray<QBAddressBookContact *> *contacts);
typedef void(^qb_response_address_book_updates_block_t)(QBAddressBookUpdates *updates);

@interface QBRequest (QBAddressBook)

/**
 Retrieves address book contacts for specified user device.

 @param udid User's device identifier. If specified all operations will be in this context. Max length 64 symbols.
 @param successBlock Block with address book contact items.
 @param errorBlock Block with response instance if request failed.
 @return An instance of QBRequest for cancel operation mainly.
 */
+ (QBRequest *)addressBookWithUdid:(nullable NSString *)udid
                      successBlock:(nullable qb_response_address_book_block_t)successBlock
                        errorBlock:(nullable qb_response_block_t)errorBlock;

/**
 Uploads fresh address book (force update).

 @param udid User's device identifier. If specified all operations will be in this context. Max length 64 symbols.
 @param addressBook Set with address book contact items (phone - unique)
 @param force Rewrite mode. If set YES all previous contacts for device context will be replaced by new ones.
 @param successBlock Block with address book updates.
 @param errorBlock Block with response instance if request failed.
 @return An instance of QBRequest for cancel operation mainly.
 */
+ (QBRequest *)uploadAddressBookWithUdid:(nullable NSString *)udid
                             addressBook:(nullable NSOrderedSet<QBAddressBookContact *> *)addressBook
                                   force:(BOOL)force
                            successBlock:(nullable qb_response_address_book_updates_block_t)successBlock
                              errorBlock:(nullable qb_response_block_t)errorBlock;
@end

NS_ASSUME_NONNULL_END
